using Microsoft.AspNetCore.Localization;

namespace WebApplication1.Models;

public class UserDTO
{
    public required  string Username { get; set; } = string.Empty;
    public required  string PasswordHash { get; set; } = string.Empty;
    
}
