<?php
class PostsController extends AppController {

    var $name = 'Posts';

    function render_vue() {}

    function index() {
        return $this->_encodeJsonResponse($this->Post->find('all'));
    }

    function view($id = null) {
        $this->Post->id = $id;
        return $this->_encodeJsonResponse($this->Post->read());
    }

    function add() {

        $response = "";
        $error = false;
        $errors = array();
        //$data = json_decode(file_get_contents('php://input')); <- No aceptamos JSON

        if (!empty($_POST) && !empty($_FILES)) {

            $move = $this->_uploadFile($_FILES);

            if ($move["move_message"]) {

                $post = array(
                    "Post" => array(
                        "title" => $_POST["title"],
                        "body" => $_POST["body"],
                        "image" => $move["name"]
                    )
                );

                if ($post_saved = $this->Post->save($post)) {
                    $response = $post_saved;
                }
                else {
                    $error = true;
                    $errors[] = "Data error";
                }

            }
            else {
                $error = true;
                $errors[] = "Error subiendo el archivo.";
            }

        }
        else {
            $error = true;
            $errors[] = "You are sending empty data";
        }

        return $this->_encodeJsonResponse($response, "", $errors);

    }

    function edit($id = null) {

        $response = "";
        $error = false;
        $errors = array();
        //$data = json_decode(file_get_contents('php://input')); <- No aceptamos JSON
        $this->Post->id = $id;
        $post = $this->Post->read();
        $post = $post["Post"];

        // Valido los campos que fueron enviados para actualizarlos
        if (!empty($_FILES)) {

            $move = $this->_uploadFile($_FILES);

            if (!$move["move_message"])
                return $this->_encodeJsonResponse("", "", array("Error subiendo el archivo."));
            
            $this->_deleteFile($post["image"]);

            $post["image"] = $move["name"];

        }

        $post["title"] = $_POST["title"] ? $_POST["title"] : $post["title"];
        $post["body"] = $_POST["body"] ? $_POST["body"] : $post["body"];

        // Guardo y respondo
        if ($post = $this->Post->save($post)) {
            $response = $post;
        }
        else {
            $error = true;
            $errors[] = "Data error";
        }

        return $this->_encodeJsonResponse($response, "", $errors);

    }

    function delete($id = null) {
        $this->autoRender = false;
        $this->Post->id = $id;
        $post = $this->Post->read();
        $this->_deleteFile($post["Post"]["image"]);
        $this->Post->del($id);
        $this->_httpRespCode(204);
    }

    function _uploadFile($file) {

        $name = pathinfo($file["image"]["name"]);
        $name = time() . "." . $name["extension"];
        $upload_to = realpath("./files") . "/$name";

        return array(
            "move_message" => move_uploaded_file($file["image"]["tmp_name"], $upload_to),
            "name" => $name
        );
        
    }

    function _deleteFile($filename) {
        $unlink_path = realpath("./files/$filename");
        unlink($unlink_path);
    }

}
