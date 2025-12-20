using API.MVC.Utilidade;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("appsettings.json",
    optional: false,
    reloadOnChange: true); //NECESSÁRIO PARA ADICIONAR O appsettings.json

var configPath = builder.Configuration["ConfigPath"]; //ADICIONA O ATRIBUTO "ConfigPath" na variavel ConfigPath
if (!String.IsNullOrEmpty(configPath))
{
    try
    {
        var constant = new Constant();
        constant.ConfigFilePath = configPath;
    }
    catch
    {
        throw;
    }
}

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//ADICIONANDO CORS (PERMISSAO DE REQUISIÇÃO)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
