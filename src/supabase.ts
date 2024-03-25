import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import {SUPABASE_API_KEY, SUPABASE_URL} from '@env';

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export default supabase;
