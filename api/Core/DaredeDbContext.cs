using Api.Domain.Models;
using Api.Core.Mapping;
using Microsoft.EntityFrameworkCore;

namespace Api.Core;

public class DaredeDbContext : DbContext
{
    public DaredeDbContext() {}

    public DaredeDbContext(DbContextOptions<DaredeDbContext> options)
    : base(options)
    {}

    public virtual DbSet<User> UserList {get; set;}
    public virtual DbSet<Phone> PhoneList {get; set;}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UserClassMap());
        modelBuilder.ApplyConfiguration(new PhoneClassMap());
    }
}