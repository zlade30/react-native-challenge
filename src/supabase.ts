import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';

const supabase = createClient(
    'https://bfqvglgegqcovynetncz.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmcXZnbGdlZ3Fjb3Z5bmV0bmN6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTM1MDQ3MSwiZXhwIjoyMDI2OTI2NDcxfQ.B4UYlg9IOSAVCXNt8R-NkepM7JXUJEPKwYQUr6ip6M0',
);

export default supabase;
