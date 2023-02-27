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

            $name = pathinfo($_FILES["image"]["name"]);
            $name = time() . "." . $name["extension"];
            $upload_to = realpath("./files") . "/$name";

            if (move_uploaded_file($_FILES["image"]["tmp_name"], $upload_to)) {

                $post = array(
                    "Post" => array(
                        "title" => $_POST["title"],
                        "body" => $_POST["body"],
                        "image" => $name
                    )
                );

                if ($post_saved = $this->Post->save($post)) {
                    $response = $post_saved;
                }
                else {
                    $error = true;
                    $errors[] = "Data error";
                    $errors[] = $post_saved;
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
        $data = json_decode(file_get_contents('php://input'));
        $this->Post->id = $id;

        if ($post = $this->Post->save($data)) {
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
        $this->Post->del($id);
        $this->_httpRespCode(204);
    }

}
