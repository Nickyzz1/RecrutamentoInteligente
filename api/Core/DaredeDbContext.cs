using Api.Domain.Models;
using ApiCore.Mapping;
using Microsoft.EntityFrameworkCore;

namespace Api.Core;

public partial class DaredeDbContext : DbContext
{
    public DaredeDbContext() {}

    public DaredeDbContext(DbContextOptions<DaredeDbContext> options)
    : base(options)
    {}

    public virtual DbSet<User> UserList {get; set;}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UserClassMap());
    }
}