var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();

var app = builder.Build(); //pega implementações de serviços

app.UseHttpsRedirection(); // usa https

app.Run();