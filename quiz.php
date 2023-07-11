<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table,
    th,
    td,
    tr {
        border: 3px #4e963f solid;
    border-collapse: collapse;
    font-size: xx-large;
    font-family: fangsong;
    text-align: -webkit-center;
    }
    table{
        margin-top: 40px;
    }
    </style>
</head>
<body>
    <center>
<?php
                $name=$_POST["user"];
                $count=$_POST["count"];
                $db=mysqli_connect("localhost","root","","newsfeed");
                if(!$db){
                    die("NOT Connected");
                }
                else{
                    if(($name!=="")&&($count!=="")){
                    $sql = "INSERT INTO newsfeed (user, pass)VALUES ('$name','$count')";
                    mysqli_query($db, $sql); 
                    }      
                    $sel="SELECT user,pass FROM newsfeed WHERE user!='' AND pass !='' ";
                    $res=mysqli_query($db,$sel);

                    if(mysqli_num_rows($res)>0){
                        $count=1;
                        echo"<table><tr><th>S.No</th><th>Name</th><th>Score</th></tr>";
                        while($row=mysqli_fetch_assoc($res)){
                            echo "<tr><td>".$count++."</td><td>".$row['user']."</td><td>".$row['pass']."</td></tr>";
                        }
                        echo"</table>";
                    }
                 
                    mysqli_close($db);
                }
            ?>
       </center>     
</body>
</html>