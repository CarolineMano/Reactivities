using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            // Where we're going to map from
            // Where we're going to map to
            CreateMap<Activity, Activity>();
        }
    }
}