using System.ComponentModel.DataAnnotations;

namespace MySPADataBase.Models
{
    public class Product
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Category { get; set; }
        public string Color { get; set; }
        public int Code { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
    }
}
