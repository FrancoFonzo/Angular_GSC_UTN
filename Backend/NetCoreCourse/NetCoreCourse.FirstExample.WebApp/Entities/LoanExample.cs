namespace NetCoreCourse.FirstExample.WebApp.Entities
{
    public class LoanExample : EntidadBase
    {
        public DateTime CreateDate { get; set; }
        public Thing Thing { get; set; }
        public Person Person { get; set; }
    }
}
