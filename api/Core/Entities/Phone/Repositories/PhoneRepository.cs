using Api.Domain.Models;
using Api.Domain.Repositories;

namespace Api.Core.Repositories;

public class PhoneRepository(DaredeDbContext context)
    : BaseRepository<Phone>(context), IPhoneRepository
{
    
}