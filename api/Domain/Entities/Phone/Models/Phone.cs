namespace Api.Domain.Models;

public class Phone : IEntity
{
    public required string Number {get; set;}
    public required User User {get; set;}
}