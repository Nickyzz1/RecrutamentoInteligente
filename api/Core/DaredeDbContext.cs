using Microsoft.EntityFrameworkCore;

namespace Api.Core;

public class DaredeDbContext : DbContext
{
    public DaredeDbContext() {}

    public DaredeDbContext(DbContextOptions<DaredeDbContext> options)
    : base(options)
    {}

    /*
    public virtual DbSet<Entity> EntityList { get; set; }
    */
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        /*
        modelBuilder.ApplyConfiguration(new EntityClassMap());
        */
    }
}