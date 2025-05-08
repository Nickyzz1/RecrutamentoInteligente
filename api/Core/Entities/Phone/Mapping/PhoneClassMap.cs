using Api.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Api.Core.Mapping;

public class PhoneClassMap : IEntityTypeConfiguration<Phone>
{
    public void Configure(EntityTypeBuilder<Phone> builder)
    {
        builder.HasKey(phone => phone.Id)
            .HasName("PK_____Phone");

        builder.ToTable("tb_phone");

        builder.Property(phone => phone.Number)
            .HasColumnName("number")
            .HasMaxLength(20);
            
        builder.Property(phone => phone.Id)
            .HasColumnName("id");

        builder.HasOne(phone => phone.User)
            .WithMany(user => user.Phones)
            .HasForeignKey("user_id")
            .HasPrincipalKey(user => user.Id);
    }
}