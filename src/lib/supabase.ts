import { createClient } from "@supabase/supabase-js";
import { env } from "../../env";

const supabaseURL = env.SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_KEY;

export const supabase = createClient(supabaseURL, supabaseKey);
