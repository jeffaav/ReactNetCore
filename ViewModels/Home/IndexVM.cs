using System.Collections.Generic;
using ReactNetCore.Models;

namespace ReactNetCore.ViewModels.Home
{
    public class IndexVM
    {
        public IList<ToDo> TodoList { get; set; }

        public IndexVM()
        {
            this.TodoList = new List<ToDo>();

            for (int i = 0; i < 10; i++)
            {
                this.TodoList.Add(new ToDo 
                {
                    Id = i + 1,
                    Name = $"Tarea {i + 1}"
                });
            }
        }
    }
}