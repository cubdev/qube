"""
Namespace module for enabling absolute import 
Run export PYTHONPATH=$(pwd) in case of any import issues, where pwd should be your root package.
"""

try:
    import pkg_resources
    pkg_resources.declare_namespace(__name__)
except ImportError:
    from pkgutil import extend_path
    __path__ = extend_path(__path__, __name__)