using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MySPADataBase.Contexts;

namespace MySPADataBase
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            setupDependencyInjectionServices(services);
            services.AddResponseCompression();
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot";
            });
            services.AddCors();
            services.AddControllers(cfg =>
            {
            }).AddFluentValidation().AddJsonOptions(opt => opt.JsonSerializerOptions.IgnoreNullValues = true)
            .SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
            services.AddAutoMapper(typeof(Startup));
        }

        private void setupDependencyInjectionServices(IServiceCollection services)
        {
            var connectionString = Configuration.GetConnectionString("MySPADataBaseDbConnection");
            services.AddDbContext<ProductContext>(options => options.UseSqlServer(connectionString),
              ServiceLifetime.Transient);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseSpaStaticFiles();
            app.UseSpaStaticFiles();
            app.UseResponseCompression();
            app.UseHttpsRedirection();
            app.UseCors(builder => builder.WithOrigins("http://localhost:1609", "http://localhost:3000", "http://localhost", "http://localhost:4200",
                "localhost:4200").AllowAnyHeader().AllowCredentials().AllowAnyMethod());
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "../";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
            app.UseResponseCompression();

        }
    }
}
