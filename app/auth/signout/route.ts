import { createClient } from '@/utils/supabase/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if(error) {
        redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
}