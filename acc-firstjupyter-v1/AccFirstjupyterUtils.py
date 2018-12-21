from notebook.base.handlers import IPythonHandler


class AccFirstjupyterHandler(IPythonHandler):

    def put(self):

       

       
        self.write({'status': 200, 'statusText': 'Success!',
                    'message': 'The post is ready for Firstjupyter!'})
        self.flush()
