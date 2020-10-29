using System;
using System.Collections.Generic;
using System.Web;
using Microsoft.EntityFrameworkCore;


namespace DefaultNamespace
{
  [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
  public class SudokuContext : DbContext
  {
    
    public SudokuContext(): base("conn")
    { }
    
    public DbSet<UserModel> Users;
    public DbSet<SudokuModel> Sudokues;
  }
}