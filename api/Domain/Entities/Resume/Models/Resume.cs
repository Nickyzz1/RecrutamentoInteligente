using Api.Domain;

namespace Api.Domain.Models;

public class Resume : IEntity
{
    public required string Bio {get; set;}
    public required User User {get; set;}
}