namespace NetCoreCourse.FirstExample.WebApp.Statics
{
    public static class StringExtensionMethods
    {
        public static string ToCUILFormat(this string cuit)
        {
            int l = cuit.Length;
            if (l < 4) return string.Empty; //or null maybe.

            cuit = cuit.Insert(l-1, "/");
            cuit = cuit.Insert(2, "-");
            
            return cuit;
        }

        public static string RandomSubstring(this string s)
        {
            Random r = new Random();
            int start = r.Next(0, s.Length);
            int end = r.Next(start, s.Length);
            int length = end - start + 1;
            return s.Substring(start, length);
        }
    }
}
