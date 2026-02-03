-- Create registrations table for symposium
CREATE TABLE IF NOT EXISTS public.registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  organization TEXT,
  designation TEXT,
  payment_status TEXT DEFAULT 'pending',
  transaction_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for registration)
CREATE POLICY "Allow public registration" ON public.registrations
  FOR INSERT WITH CHECK (true);

-- Allow anyone to read registrations
CREATE POLICY "Allow read registration" ON public.registrations
  FOR SELECT USING (true);

-- Allow updates to registration
CREATE POLICY "Allow update registration" ON public.registrations
  FOR UPDATE USING (true);
