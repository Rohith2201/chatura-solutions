import { createClient } from '@supabase/supabase-js'

// Get Supabase configuration from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl) {
  console.error('[v0] Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
  throw new Error(
    'Missing NEXT_PUBLIC_SUPABASE_URL environment variable. ' +
    'Please check your .env.local file and ensure it contains a valid Supabase URL. ' +
    'See DATABASE_SETUP.md for detailed setup instructions.'
  )
}

if (!supabaseKey) {
  console.error('[v0] Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable')
  throw new Error(
    'Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable. ' +
    'Please check your .env.local file and ensure it contains a valid Supabase anonymous key. ' +
    'See DATABASE_SETUP.md for detailed setup instructions.'
  )
}

// Validate URL format
if (!supabaseUrl.startsWith('https://')) {
  console.warn('[v0] Supabase URL should start with https://')
}

// Create Supabase client for server-side operations
export const createServerClient = () => {
  return createClient(supabaseUrl, supabaseKey)
}

// Initialize the client (reused across requests)
let supabaseClient: ReturnType<typeof createClient> | null = null

export const getSupabaseClient = () => {
  if (!supabaseClient) {
    supabaseClient = createServerClient()
  }
  return supabaseClient
}
