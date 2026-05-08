import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mvmrmsiybhazncdrievf.supabase.co";
const supabaseAPIKey = "sb_publishable_PrVBN3wf8psCBpFMqjrbcw_XQJr-Gzs";

export const supabase = createClient(
  supabaseUrl,
  supabaseAPIKey
);