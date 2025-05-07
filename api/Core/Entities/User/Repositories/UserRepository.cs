using Api.Domain.Models;
using Api.Domain.Repositories;

namespace Api.Core.Repositories;

public class UserRepository(DaredeDbContext context)
    : BaseRepository<User>(context), IUserRepository
{

}