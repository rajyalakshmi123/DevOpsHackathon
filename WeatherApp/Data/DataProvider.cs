//using Couchbase;
//using Couchbase.Authentication;
//using Couchbase.Configuration.Client;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace WeatherApp.Data
//{
//    public class DataProvider
//    {

//        public void GetData()
//        {
//            var cluster = new Cluster(new ClientConfiguration
//            {
//                Servers = new List<Uri> { new Uri("http://10.112.170.101") }
//            });

//            var authenticator = new PasswordAuthenticator("username", "password");
//            cluster.Authenticate(authenticator);
//            var bucket = cluster.OpenBucket("bucketname");
//        }
//    }
//}
