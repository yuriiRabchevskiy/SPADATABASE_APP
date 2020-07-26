using Microsoft.EntityFrameworkCore;
using MySPADataBase.Models;

namespace MySPADataBase.Contexts
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options) { }
        public DbSet<Product> Product { get; set; }
    }
}
