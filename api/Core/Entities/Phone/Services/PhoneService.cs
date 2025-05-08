using Api.Core.Repositories;
using Api.Domain.Models;
using Api.Domain.Services;

namespace Api.Core.Services;

public class PhoneService(PhoneRepository repository)
    : BaseService<Phone>(repository), IPhoneService
{

}