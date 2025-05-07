using Api.Domain;

namespace Api.Domain.Models;

public class User : IEntity
{
    public required string Name {get; set;}
    public required string Email {get; set;}
    public required string Password {get; set;}
    public string? Address {get; set;}
    public required bool Admin {get; set;} = false;
}