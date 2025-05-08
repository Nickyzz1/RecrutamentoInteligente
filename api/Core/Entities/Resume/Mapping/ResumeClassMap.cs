using Api.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Api.Core.Mapping;

public class ResumeClassMap : IEntityTypeConfiguration<Resume>
{
    public void Configure(EntityTypeBuilder<Resume> builder)
    {
        builder.HasKey(resume => resume.Id)
            .HasName("PK_____Resume");

        builder.ToTable("tb_resume");

        builder.Property(resume => resume.Id)
            .HasColumnName("id");

        builder.Property(resume => resume.Bio)
            .HasColumnName("bio");

        builder.HasOne(resume => resume.User)
            .WithOne(user => user.Resume);
    }
}