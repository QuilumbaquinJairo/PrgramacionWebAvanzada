using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models;

public class MyDBContext:DbContext
{
    public DbSet<Person> Person{ get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase("MyDb");
    }
}