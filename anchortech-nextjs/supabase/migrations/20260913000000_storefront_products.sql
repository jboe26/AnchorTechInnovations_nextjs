-- Digital products storefront: Product and Purchase tables.
-- Additive only. Namespaced with storefront_ prefix to avoid any
-- collision with existing Portal tables (Client, Project, Invoice, etc.)
-- in this shared database. RLS is enabled with no policies, so only
-- the service-role key (used server-side by the storefront) can read
-- or write these tables -- no anon/public access.

create table if not exists storefront_products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  short_description text not null,
  long_description text not null,
  price_cents integer not null,
  currency text not null default 'usd',
  active boolean not null default true,
  storage_path text not null,
  file_label text not null,
  version text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists storefront_purchases (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references storefront_products(id),
  email text not null,
  stripe_session_id text not null unique,
  stripe_payment_intent_id text,
  amount_cents integer not null,
  currency text not null default 'usd',
  status text not null default 'pending' check (status in ('pending', 'paid', 'refunded')),
  download_token text unique,
  download_count integer not null default 0,
  last_download_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists storefront_purchases_download_token_idx
  on storefront_purchases (download_token);

create index if not exists storefront_purchases_stripe_session_id_idx
  on storefront_purchases (stripe_session_id);

create index if not exists storefront_purchases_product_id_idx
  on storefront_purchases (product_id);

alter table storefront_products enable row level security;
alter table storefront_purchases enable row level security;
