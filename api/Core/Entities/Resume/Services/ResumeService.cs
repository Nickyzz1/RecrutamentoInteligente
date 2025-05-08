using Api.Domain.Models;
using Api.Domain.Services;

namespace Api.Core.Services;

public class ResumeService(BaseRepository<Resume> repository)
    : BaseService<Resume>(repository), IResumeService
{

}