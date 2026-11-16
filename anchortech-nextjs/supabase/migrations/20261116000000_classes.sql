-- Technology classes: registrations and topic requests from /classes.
-- Written 2026-11-16 for Josh's review. NOT applied yet.
-- All access is through the service-role client in the API routes
-- (same pattern as pricing_inquiries), so RLS stays on with no
-- public policies: the anon key can read or write nothing here.

create table if not exists public.class_registrations (
  id uuid primary key default gen_random_uuid(),
  class_slug text not null,
  class_title text not null,
  class_when text not null,
  class_where text not null,
  name text not null,
  email text not null,
  -- confirmed_free: first class for this email, no payment.
  -- pending_payment: row created, waiting on Stripe checkout.
  -- paid: Stripe confirmed the $15.
  -- cancelled: registrant or Josh cancelled; frees the seat and does
  -- not count as the email's used registration.
  status text not null default 'confirmed_free'
    check (status in ('confirmed_free', 'pending_payment', 'paid', 'cancelled')),
  stripe_session_id text,
  ip text,
  confirmation_sent boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists class_registrations_email_idx
  on public.class_registrations (lower(email));
create index if not exists class_registrations_class_idx
  on public.class_registrations (class_slug, status);

alter table public.class_registrations enable row level security;

create table if not exists public.topic_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  topic text not null,
  location text not null,
  ip text,
  created_at timestamptz not null default now()
);

create index if not exists topic_requests_location_topic_idx
  on public.topic_requests (lower(location), lower(topic));

alter table public.topic_requests enable row level security;
