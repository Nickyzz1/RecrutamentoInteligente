using Api.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Api.Core.Mapping;

public class UserClassMap : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(user => user.Id)
            .HasName("PK_____User");

        builder.ToTable("tb_user");

        builder.Property(user => user.Id)
            .HasColumnName("id");

        builder.Property(user => user.Name)
            .HasColumnName("name")
            .HasMaxLength(254);

        builder.Property(user => user.Email)
            .HasColumnName("email")
            .HasMaxLength(254);

        builder.Property(user => user.Password)
            .HasColumnName("password")
            .HasMaxLength(254);

        builder.Property(user => user.Address)
            .HasColumnName("address")
            .HasMaxLength(254);

        builder.Property(user => user.Admin)
            .HasColumnName("admin");

        builder.HasMany(user => user.Phones)
            .WithOne(phone => phone.User);

        builder.HasOne(user => user.Resume)
            .WithOne(resume => resume.User);
    }
}