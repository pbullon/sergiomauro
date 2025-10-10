// src/lib/supabase.ts

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// 1. Obtenemos las variables de entorno. TypeScript sabe que podrían no existir.
const supabaseUrl: string | undefined = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey: string | undefined = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// 2. Creamos una validación para asegurarnos de que las variables existan.
// Esto evita errores en el futuro.
    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Las variables de entorno PUBLIC_SUPABASE_URL y PUBLIC_SUPABASE_ANON_KEY son requeridas.");
}

// 3. Creamos y exportamos el cliente de Supabase, ahora con su tipo definido.
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);