<!DOCTYPE html>
<html>
<head>
    <title>Comments</title>
    <style type="text/css">
    *{
        background-color: blue;
        color: yellow;
    }
    #header{
        text-align: center;
        color: white;
    }
    </style>
</head>
<body>
<h1 id="header"><u>Comment Section</u></h1>
<form method="post">
Name:<input type="text" name="name" required><br/>
Comment:<textarea name="comment" required></textarea><br/>
<input type="submit" name="submit" value="Post Comment">
</form>
<?php
$name = $_POST['name'];
$comment = $_POST['comment'];
$date = gmdate("M d Y");
if ($_POST)
    {
    $handle = fopen("comments.txt", "a");
    fwrite($handle,"<h1>" . $name . ": (" . $date . ")</h1>" . $comment . "<br/><br/>");
    fclose($handle);
    }

?>
<?php include "comments.txt"; ?>
</body>
</html>
