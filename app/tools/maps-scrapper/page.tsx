import { createClient } from '@/utils/supabase/server'
import MapsScraper from "./MapsScrapper"
import { redirect } from 'next/navigation'

export default async function MapsScrapperPage() {    
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return <MapsScraper />
}
