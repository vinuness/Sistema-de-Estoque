using API.MVC.Utilidade;
using Oracle.ManagedDataAccess.Client;

namespace API.MVC
{
    public class Connection
    {
        public static OracleConnection GetConnection()
        {
            return new OracleConnection(Constant.Connection);
        }
    }
}
