using Microsoft.AspNetCore.Mvc;
using ReactNetCore.ViewModels.Home;

namespace ReactNetCore.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View(new IndexVM());
    }
}