import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, target_country, target_university, education_level } = body

    // Validate required fields
    if (!name || !email || !phone || !education_level) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, and education_level are all required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Validate phone format (basic check)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Please provide a valid phone number' },
        { status: 400 }
      )
    }

    // Get Supabase client
    const supabase = getSupabaseClient()

    // Insert consultation request into database
    const { error, data } = await supabase
      .from('consultations')
      .insert([
        {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          target_country: target_country?.trim() || null,
          target_university: target_university?.trim() || null,
          education_level: education_level.trim(),
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Database error:', {
        code: error.code,
        message: error.message,
        details: error.details,
      })
      
      // Provide more specific error messages
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'The consultations table does not exist. Please create it first using the DATABASE_SETUP.md instructions.' },
          { status: 500 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to save consultation request. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Consultation request submitted successfully',
        data 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] API error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json(
      { error: `Internal server error: ${errorMessage}` },
      { status: 500 }
    )
  }
}
