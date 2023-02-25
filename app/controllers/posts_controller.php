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
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data)) {
            if ($post = $this->Post->save($data)) {
                $response = $post;
            }
            else {
                $error = true;
                $errors[] = "Data error";
            }
        }
        else {
            $error = true;
            $errors[] = "Empty data";
        }

        return $this->_encodeJsonResponse($response, "", $errors);

    }

    // Solo funciona con POST
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
