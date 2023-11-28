using Microsoft.AspNetCore.DataProtection.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication1.Models;

namespace WebApplication1.Pages;

public class personas : PageModel
{
    private readonly MyDBContext _context;
    public List<Person> people { get; set; } = new List<Person>();
    [BindProperty] public Person newPerson { get;set; }

    public personas(MyDBContext context)
    {
        _context = context;
    }
    
    public void OnGet()
    {
        people = _context.Person.ToList();
    }

    public IActionResult OnPost()
    {
        _context.Person.Add(newPerson);
        _context.SaveChanges();
        return RedirectToPage();
    }
}