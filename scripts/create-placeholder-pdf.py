from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "documento.pdf"
PUBLIC = ROOT / "public" / "documento.pdf"


def create_pdf(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    width, height = A4
    pdf = canvas.Canvas(str(path), pagesize=A4)
    pdf.setTitle("Propuesta integral - La Paz desde las alturas a la luna")
    pdf.setAuthor("Producto 1")

    dark = HexColor("#211B19")
    clay = HexColor("#B96F4B")
    sand = HexColor("#F1E8DC")
    gold = HexColor("#E7AE72")

    pdf.setFillColor(sand)
    pdf.rect(0, 0, width, height, fill=1, stroke=0)
    pdf.setFillColor(dark)
    pdf.rect(0, height - 205, width, 205, fill=1, stroke=0)
    pdf.setFillColor(clay)
    pdf.circle(width - 78, height - 78, 42, fill=1, stroke=0)
    pdf.setStrokeColor(gold)
    pdf.setLineWidth(1)
    pdf.circle(width - 78, height - 78, 55, fill=0, stroke=1)

    pdf.setFillColor(gold)
    pdf.setFont("Helvetica-Bold", 9)
    pdf.drawString(48, height - 54, "PRODUCTO 1  /  PROPUESTA INTEGRAL")
    pdf.setFillColor(HexColor("#FFFFFF"))
    pdf.setFont("Helvetica-Bold", 30)
    pdf.drawString(48, height - 105, "La Paz desde las alturas")
    pdf.drawString(48, height - 142, "a la luna")
    pdf.setFont("Helvetica", 12)
    pdf.setFillColor(HexColor("#D9CEC7"))
    pdf.drawString(48, height - 176, "Documento de referencia temporal")

    pdf.setFillColor(clay)
    pdf.setFont("Helvetica-Bold", 10)
    pdf.drawString(48, height - 258, "PRÓXIMAMENTE")
    pdf.setFillColor(dark)
    pdf.setFont("Helvetica-Bold", 21)
    pdf.drawString(48, height - 292, "Propuesta integral de la experiencia")
    pdf.setFont("Helvetica", 12)
    pdf.setFillColor(HexColor("#66574E"))
    lines = [
        "Este archivo es una versión provisional creada para verificar la consulta",
        "y descarga del documento desde el sitio web.",
        "",
        "La versión definitiva incorporará el concepto del servicio, la visión,",
        "la estrategia, los artefactos ágiles y la planificación de la experiencia.",
    ]
    y = height - 332
    for line in lines:
        pdf.drawString(48, y, line)
        y -= 20

    pdf.setStrokeColor(HexColor("#CAB7A5"))
    pdf.line(48, 92, width - 48, 92)
    pdf.setFont("Helvetica", 9)
    pdf.setFillColor(HexColor("#86756B"))
    pdf.drawString(48, 70, "La Paz, Bolivia")
    pdf.drawRightString(width - 48, 70, "Documento temporal")
    pdf.save()


create_pdf(OUTPUT)
PUBLIC.write_bytes(OUTPUT.read_bytes())
print(OUTPUT)
