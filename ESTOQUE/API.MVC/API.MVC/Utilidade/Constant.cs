using Oracle.ManagedDataAccess.Client;
using System.Xml;

namespace API.MVC.Utilidade
{
    public class Constant
    {
        public static string? Connection {get;set;}

        public string ConfigFilePath
        { set
            {
                XmlDocument xml = new();
                xml.Load(value);
                XmlNode? node = xml.DocumentElement?.SelectSingleNode("connectionStrings/add[@name='TESTE']");
                Connection = node?.Attributes?["value"]?.Value;
            } }
    }
}
