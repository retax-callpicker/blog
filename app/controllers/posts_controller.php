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

        if (!empty($_POST)) {
            if ($post = $this->Post->save($_POST)) {
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
        $this->Post->id = $id;

        if ($post = $this->Post->save($_POST)) {
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
