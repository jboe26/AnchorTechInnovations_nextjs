-- Pricing inquiry log: a record of every "Start with..." submission on the
-- pricing page, independent of whether the notification/auto-reply emails
-- actually send. Also doubles as the source of truth for rate limiting
-- (checked by recent email/ip before inserting a new row). RLS is enabled
-- with no policies, so only the service-role key can read or write.

create table if not exists pricing_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  plan_name text not null,
  price_label text not null,
  ip text,
  email_sent boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists pricing_inquiries_email_idx
  on pricing_inquiries (email);

create index if not exists pricing_inquiries_ip_created_at_idx
  on pricing_inquiries (ip, created_at);

alter table pricing_inquiries enable row level security;
