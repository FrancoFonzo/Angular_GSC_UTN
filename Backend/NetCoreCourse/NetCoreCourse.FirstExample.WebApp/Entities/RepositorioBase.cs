namespace NetCoreCourse.FirstExample.WebApp.Entities
{
    public class RepositorioBase<T> where T : EntidadBase
    {

        public string Add(T entity)
        {
            return $"La entidad con Id {entity.Id} fue agregada";

        }

        public T ModifyDescription(T entity, string newDescription)
        {
            entity.Descripcion = newDescription;
            return entity;
        }
    }
}
