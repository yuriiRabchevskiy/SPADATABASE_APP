using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MySPADataBase.Contexts;
using MySPADataBase.Models;

namespace MySPADataBase.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        readonly ProductContext ProdDetails;
        public ProductController(ProductContext productsContext)
        {
            ProdDetails = productsContext;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            var data = ProdDetails.Product.ToList();
            return data;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product obj)
        {
            var data = ProdDetails.Product.Add(obj);
            ProdDetails.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Product obj)
        {
            var data = ProdDetails.Product.Update(obj);
            ProdDetails.SaveChanges();
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = ProdDetails.Product.Where(a => a.Id == id).FirstOrDefault();
            ProdDetails.Product.Remove(data);
            ProdDetails.SaveChanges();
            return Ok();

        }
    }
}
