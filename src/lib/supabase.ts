import { createClient } from "@supabase/supabase-js";
import { env } from "../../env";

const supabaseURL = env.SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_KEY;

export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_KEY);
